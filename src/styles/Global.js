import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  .main-wrapper {
    display: grid;
    grid-gap: 5px;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:50px 580px 400px 500px;
    grid-template-areas:
      'header header header'
      'slider slider slider'
      'posts posts posts'
      'contact contact contact'
  }

  .header {
    grid-area: header;
  }

  .slider {
    grid-area: slider;
  }

  .posts {
    grid-area: posts;
  }

  .contact {
    grid-area: contact;
  }
  
  .sliderStyles {
    --organic-arrow-thickness: 6px;
    --organic-arrow-color: white;
    --control-bullet-color: #B421FC;
    --loader-bar-color: #B421FC;
    height:500px;
  }

  .posts-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .contact-info-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .contact-card {
    --card-width:40%;
  }
`;

export default GlobalStyles;