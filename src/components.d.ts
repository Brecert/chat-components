/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ChatAvatar {
    /**
    * The path to the avatar image
    */
    'src': string;
  }
  interface ChatInput {
    'newlineWhenShift': boolean;
    'sendKeys': string[];
    'value': string;
  }
  interface ChatMessage {
    /**
    * The avatar url of the user who created the message
    */
    'avatar'?: string;
    /**
    * The timestamp of when the message was created
    */
    'datetime': string;
    /**
    * The sent message
    */
    'message': string;
    /**
    * The username of the user who created message
    */
    'username': string;
  }
}

declare global {


  interface HTMLChatAvatarElement extends Components.ChatAvatar, HTMLStencilElement {}
  var HTMLChatAvatarElement: {
    prototype: HTMLChatAvatarElement;
    new (): HTMLChatAvatarElement;
  };

  interface HTMLChatInputElement extends Components.ChatInput, HTMLStencilElement {}
  var HTMLChatInputElement: {
    prototype: HTMLChatInputElement;
    new (): HTMLChatInputElement;
  };

  interface HTMLChatMessageElement extends Components.ChatMessage, HTMLStencilElement {}
  var HTMLChatMessageElement: {
    prototype: HTMLChatMessageElement;
    new (): HTMLChatMessageElement;
  };
  interface HTMLElementTagNameMap {
    'chat-avatar': HTMLChatAvatarElement;
    'chat-input': HTMLChatInputElement;
    'chat-message': HTMLChatMessageElement;
  }
}

declare namespace LocalJSX {
  interface ChatAvatar extends JSXBase.HTMLAttributes<HTMLChatAvatarElement> {
    /**
    * The path to the avatar image
    */
    'src'?: string;
  }
  interface ChatInput extends JSXBase.HTMLAttributes<HTMLChatInputElement> {
    'newlineWhenShift'?: boolean;
    'onSendMessage'?: (event: CustomEvent<string>) => void;
    'sendKeys'?: string[];
    'value'?: string;
  }
  interface ChatMessage extends JSXBase.HTMLAttributes<HTMLChatMessageElement> {
    /**
    * The avatar url of the user who created the message
    */
    'avatar'?: string;
    /**
    * The timestamp of when the message was created
    */
    'datetime'?: string;
    /**
    * The sent message
    */
    'message'?: string;
    /**
    * The username of the user who created message
    */
    'username'?: string;
  }

  interface IntrinsicElements {
    'chat-avatar': ChatAvatar;
    'chat-input': ChatInput;
    'chat-message': ChatMessage;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


