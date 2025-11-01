import type { Schema, Struct } from '@strapi/strapi';

export interface UiProduct extends Struct.ComponentSchema {
  collectionName: 'components_ui_products';
  info: {
    displayName: 'product';
  };
  attributes: {
    product_ageCategory: Schema.Attribute.Enumeration<
      [
        'All',
        'Age 0\u20132 Years',
        'Age 3\u20135 Years',
        'Age 6\u20138 Years',
        'Age 9\u201312 Years',
        'Adults',
      ]
    >;
    product_category: Schema.Attribute.String;
    product_description: Schema.Attribute.Text;
    product_images: Schema.Attribute.Media<'images' | 'videos', true>;
    product_name: Schema.Attribute.String;
    product_price: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.product': UiProduct;
    }
  }
}
