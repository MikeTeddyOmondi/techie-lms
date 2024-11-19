import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsPublicPlayer extends Struct.ComponentSchema {
  collectionName: 'components_elements_public_players';
  info: {
    description: '';
    displayName: 'Public Player';
  };
  attributes: {
    timecode: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    videoId: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.public-player': ElementsPublicPlayer;
    }
  }
}
