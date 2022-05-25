![Logo](https://user-images.githubusercontent.com/44404484/170301196-05054990-b970-4880-911d-7490ed55e69c.png)
## Youtube Download API

## ℹ️ Sobre

API desenvolvida em Node js, para realizar download de videos do youtube.
Ainda em fase desenvolvimento!😁
    
## 🛠  Ferramentas
Express, TypeDi, ytdl-core

## 📖 Descrição

#### Realizar Download do video

```http
  POST /download
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `url` | `string` | **Obrigatório**. URL do video |

#### Retorna o video

```http
  GET /file/${nomeficheiro}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nomeficheiro`      | `string` | **Obrigatório**. Nome Retornado do Post Download|





## Instalação

Instale my-project com npm

```bash
  yarn 
  yarn start
```

