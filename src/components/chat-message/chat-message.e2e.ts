import { newE2EPage } from '@stencil/core/testing';

describe('chat-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<chat-message></chat-message>');
    const element = await page.find('chat-messaged');
    expect(element).not.toBe(undefined);
  });

  it('renders changes to the message data', async () => {
    const page = await newE2EPage();

    await page.setContent('<chat-message></chat-message>');
    const component = await page.find('chat-message');

    const username = await page.find('chat-message .username');
    expect(username.textContent).toEqual(``);
    component.setProperty('username', 'brecert')
    await page.waitForChanges();
    expect(username.textContent).toEqual('brecert')

    const timestamp = await page.find('chat-message .timestamp');
    expect(timestamp.textContent).toEqual(``);
    component.setProperty('datetime', '2014-04-01T16:30:00-08:00');
    await page.waitForChanges();
    expect(timestamp.textContent).toEqual(`1396398600000`);

    const message = await page.find('chat-message .message');
    expect(message.textContent).toEqual(``);
    component.setProperty('message', 'hello world!');
    await page.waitForChanges();
    expect(message.textContent).toEqual(`hello world!`);

    component.setProperty('avatar', 'https://via.placeholder.com/250');
    const avatarEmpty = await page.find('chat-message .avatar');
    expect(avatarEmpty).toBeNull
    await page.waitForChanges();
    const avatarImage = await page.find('chat-message .avatar');
    expect(avatarImage.getAttribute('src')).toEqual('https://via.placeholder.com/250')
  });
});
