import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'IphoneXtreme Tienda',
  description: 'Venta de electronicos de la marca Apple',
  keywords: 'electronics, buy electronics, cheap electroincs',
};

export default Meta;
