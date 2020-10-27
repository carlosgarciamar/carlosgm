---
title: 'Como crear un sitio multi-idioma usando Gatsby y AWS Amplify'
date: 2020-10-25
categories: [javascript, frontend]
language: es
---

En este artículo explicaré como crear fácilmente un sitio estático con varios idiomas usando [Gatsby](https://gatsbyjs.com) y [AWS Amplify](https://aws.amazon.com/amplify/). Estos son los mismos pasos que he seguido para crear este blog. Necesitarás una [cuenta de AWS](https://aws.amazon.com/account) y deberás tener [NodeJS](http://nodejs.org) con npm instalado.

<!-- start -->

# Creando un sitio web con Gatsby

Lo primero es que crees un sitio web usando Gatsby. Gatsby tiene en su web una [guía rápida](https://www.gatsbyjs.com/docs/quick-start/) y un [tutorial completo](https://www.gatsbyjs.com/tutorial/) sobre como hacer esto. Crea tu sitio primero en el idioma principal que vayas a usar.

Ua vez estés maás o menos contento con cómo se ve tu sitio en tu ordenador (podrás hacer más modificaciones en el futuro, no te preocupes), haz `push`a un repositorio git remoto que se pueda acceder desde AWS, idealmente en [Github](https://github.com) o [Bitbucket](https://bitbucket.org/).

# Hosting your site on AWS Amplify

Log into your AWS console and use the dropdown to find AWS Amplify, you should see the title `Get started with the Amplify Console` (if not, click on the `Connect App` button). Select the service you used to host your code, click `Continue` and log into the service.

![AWS Amplify](./img/mutilanguage-site-gatsby-amplify-01.png)

Select the repository and branch where you have your code. AWS Amplify will detect that you are going to host a Gatsby site and do all the heavy lifting for you, but you might want to change the app name.

By default, the app name will be the same that your repo, but since we will be creating one app for each language I would recommend adding some identifier for each language, for instance `en__myapp` or `myapp-gb_en`. Once you are happy press `Next`, review all the details and when you are happy press `Save and deploy`.

If everything goes well you should have your Gatsby site hosted and deployed on AWS Amplify and you should have an URL to access it.

While you are still on `AWS Amplify` go to `Environment variables` and add a new environment variable. Name the variable `GATSBY_LANGUAGE` and enter a value that identifies the default language you are using so far. I would recommend using an [ISO Code that identifies the language](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

![AWS Amplify - Environment variables](./img/mutilanguage-site-gatsby-amplify-02.png)

# Modifying our site to support a second language

The environment variable that we just created will be useful in order to identify the correct language within our site. This will be useful towards:
* enabling switching from one language to another;
* serving content in the correct language.

Before you do any of this you should create a `.env.development` file in the root of your Gatsby site and write in it your `GATSBY_LANGUAGE` variable. It should look like the following:

```
GATSBY_LANGUAGE=en
```
But with your language code instead of `en`. You will need to reload gatsby every time you change this variable will you develop. Now we are ready to implement our second language.

## Switching between languages

You will need to create a custom component.

## Serving content in the correct language

Your content should be tagged and you should filter it.

# Creating your second app

Create a second app in AWS Amplify with the new variable.

## Create as many languages as you want

# SEO and further improvements

Make sure all your meta are in the correct language depending on env variable.
