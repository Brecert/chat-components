import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-message',
  styleUrl: 'chat-message.scss',
  shadow: false
})
export class MyComponent {
  /**
   * The username of the user who created message
   */
  @Prop() username: string;

  /**
   * The sent message
   */
  @Prop() message: string;

  /**
   * The timestamp of when the message was created
   */
  @Prop() timestamp: Date;

  /**
   * The avatar url of the user who created the message
   */
  @Prop() avatar?: string


  render() {
    return(
      <div class="chat-message">
        { this.avatar === undefined
          ? <div key="avatarEmpty" />
          : <div key="avatar" class="avatar">
              <img src={this.avatar}/>
            </div>
        }
        <div class="message-info">
          <div class="username">{this.username}</div>
          <div class="timestamp">{this.timestamp}</div>
        </div>
        <div class="message">{this.message}</div>
      </div>
    )
  }
}
