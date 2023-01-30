import { useEffect, useState } from "react";
import { Alert } from "react-native"
import * as ImagePicker from "expo-image-picker";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { useForm, Controller, FieldValues, Control } from "react-hook-form";
import { yupResolver  } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Prices } from "../../components/Prices";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Pizza } from "../Home";
import {  Container, 
          DeleteButton, 
          DeleteButtonText, 
          Description, 
          DescriptionLegend, 
          Footer, 
          Form, 
          Header, 
          HeaderTitle, 
          ImageView, 
          Input, 
          Legend, 
          LoadImageButton, 
          LoadImageText, 
          MaxCaracteres, 
          NoneImageText, 
          NoneImageView,  
          ScrollContain, 
          UploadImageArea 
        } from "./styles"


type FormData = {
  name: string,
  description: string,
  priceP: string;
  priceM: string;
  priceG: string;
}


const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  description: yup.string().required('Descrição é obrigatório'),
  priceP: yup.string().required('Preço P é obrigatório'),
  priceM: yup.string().required('Preço M é obrigatório'),
  priceG: yup.string().required('Preço G é obrigatório'),
})

export const Product = () => {
  const [pizzaImage, setPizzaImage] = useState('');
  const [isPizzaSelectChange, setIsPizzaSelectChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params as Pizza;

  const { control, handleSubmit, watch, reset, setValue } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: ''
    }
  });

  const { description } = watch()

  const formControl = control as unknown as Control<FieldValues, any>

  const { COLORS } = useTheme();

  const handleSelectPizza = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      quality: 1,
    })

    if (!result.canceled) {
      setPizzaImage(result.assets[0].uri);
      setIsPizzaSelectChange(true);
    }
  }

  const handleAddPizza = async (form: FormData) => {
    
    setIsLoading(true);

    if (!data) {
      // Cadastrar

      const fileName = new Date().getTime();
      const reference = storage().ref(`/pizzas/${fileName}.png`);
  
      await reference.putFile(pizzaImage);
      const photo_url = await reference.getDownloadURL();
  
      firestore()
      .collection('pizzas')
      .add({
        name: form.name,
        name_insensitive: form.name.toLocaleLowerCase().trim(),
        description: form.description,
        prices_sizes: {
          p: form.priceP,
          m: form.priceM,
          g: form.priceG
        },
        photo_url,
        photo_path: reference.fullPath
      })
      .then(() => {
        Alert.alert('Cadastro', 'Pizza cadastrada com sucesso')
        setPizzaImage('')
        reset();
      })
      .catch(() => Alert.alert('Ops', 'Náo foi possível cadastrar a pizza'))
      .finally(() => setIsLoading(false))

      setPizzaImage('');
      reset();
    } else {
      // Atualizar

      if (isPizzaSelectChange) {
         storage().ref(data.photo_path).delete();
        
        const fileName = new Date().getTime();
        const reference = storage().ref(`/pizzas/${fileName}.png`);
        await reference.putFile(pizzaImage);
        const photo_url = await reference.getDownloadURL();

        firestore()
        .collection('pizzas')
        .doc(data.id)
        .update({
          name: form.name,
          name_insensitive: form.name.toLocaleLowerCase().trim(),
          description: form.description,
          prices_sizes: {
            p: form.priceP,
            m: form.priceM,
            g: form.priceG
          },
          photo_url,
          photo_path: reference.fullPath
        })
        .then(() => Alert.alert('Atualização', 'Pizza atualizada com sucesso'))
        .catch(() => Alert.alert('Ops', 'Náo foi possível atualizar a pizza'))
        .finally(() => setIsLoading(false))
      } else {
        firestore()
        .collection('pizzas')
        .doc(data.id)
        .update({
          name: form.name,
          name_insensitive: form.name.toLocaleLowerCase().trim(),
          description: form.description,
          prices_sizes: {
            p: form.priceP,
            m: form.priceM,
            g: form.priceG
          }
        })
        .then(() => Alert.alert('Atualização', 'Pizza atualizada com sucesso'))
        .catch(() => Alert.alert('Ops', 'Náo foi possível atualizar a pizza'))
        .finally(() => setIsLoading(false))
      }
    }


  }

  const handleRemovePizza = () => {
    storage()
    .ref(data.photo_path)
    .delete()
    .then(() => {
      firestore()
      .collection('pizzas')
      .doc(data.id)
      .delete()
       .then(() => navigation.navigate('home')) 
    })
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      setPizzaImage(data.photo_url);
      setValue('name', data.name);
      setValue('description', data.description);
      setValue('priceP', data.prices_sizes.p);
      setValue('priceM', data.prices_sizes.m);
      setValue('priceG', data.prices_sizes.g);
    }
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />

        <HeaderTitle>Cadastrar</HeaderTitle>

        { data &&
          <DeleteButton onPress={handleRemovePizza}>
            <DeleteButtonText>
              Deletar
            </DeleteButtonText>
          </DeleteButton> 
        }

      </Header>
      
        <ScrollContain 
          showsVerticalScrollIndicator={false}
        >
          <UploadImageArea>
            {pizzaImage ? (
                <ImageView source={{ uri: pizzaImage}} resizeMode="contain" />
              ) : (
                <NoneImageView>
                  <NoneImageText>
                      Nenhuma foto {'\n'}
                      carregada
                  </NoneImageText>
                </NoneImageView>
              )
            }

            <LoadImageButton onPress={handleSelectPizza}>
              <LoadImageText>Carregar</LoadImageText>
            </LoadImageButton>
          </UploadImageArea>

          <Form>
            <Legend>Nome</Legend>
            <Controller 
              name="name"
              control={formControl}
              render={({ field: { value, onChange} }) => (
                <Input 
                autoCapitalize="words"
                autoCorrect={false}
                onChangeText={onChange}
                value={value}
                />
              )}
            />

            <Description>
              <DescriptionLegend>Descrição</DescriptionLegend>
              <MaxCaracteres>Max {60 - Number(description.length) } caracteres</MaxCaracteres>
            </Description>

            <Controller 
              name="description"
              control={formControl}
              render={({ field: {value, onChange} }) => (
                <Input 
                autoCapitalize="sentences"
                multiline={true}
                numberOfLines={3}
                maxLength={60}
                onChangeText={onChange}
                value={value}
                />
              )}
            />

            <Legend>Tamanho e preços</Legend>
            
            <Controller 
              name="priceP"
              control={formControl}
              render={({ field: { value, onChange } }) => (
                <Prices 
                  size="P"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller 
              name="priceM"
              control={formControl}
              render={({ field: { value, onChange } }) => (
                <Prices 
                  size="M"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller 
              name="priceG"
              control={formControl}
              render={({ field: { value, onChange } }) => (
                <Prices 
                  size="G"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Footer>
              <Button 
                title={data ? 'Atualizar Pizza' : 'Cadastrar Pizza'}
                type="secondary" 
                isLoading={isLoading}
                onPress={handleSubmit(handleAddPizza)} 
              />
            </Footer>
          </Form>

        </ScrollContain>

    </Container>
  )
}