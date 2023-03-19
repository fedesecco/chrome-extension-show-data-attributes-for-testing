# template for HTML testing page

- JS Bin: <https://output.jsbin.com/xutihow>
- version: 19.3.2023

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS Bin</title>
  </head>
  <body>
    <h1>Testing page for data attributes</h1>
    <p>
      Chrome extension
      <a
        href="https://chrome.google.com/webstore/detail/show-data-attributes/pidodppoaapknmhbdpkfpffkdeppgmie"
        target="_blank"
      >
        <strong>Show data attributes for testing </strong>
      </a>
    </p>
    <hr />
    <h2>data-cy</h2>
    <form>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="name">Name </label>
        </div>
        <input type="text" id="name" name="user-name" data-cy="name" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="mail">Email </label>
        </div>
        <input type="email" id="mail" name="user-email" data-cy="email" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="msg">Message </label>
        </div>
        <textarea id="msg" name="user-message" data-cy="message"> </textarea>
      </div>
      <div class="button">
        <button type="submit" data-cy="submit" disabled>Submit</button>
      </div>
    </form>
    <hr />
    <h2>data-test</h2>
    <form>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="name">Name </label>
        </div>
        <input type="text" id="name" name="user-name" data-test="name" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="mail">Email </label>
        </div>
        <input type="email" id="mail" name="user-email" data-test="email" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="msg">Message </label>
        </div>
        <textarea id="msg" name="user_message" data-test="message"> </textarea>
      </div>
      <div class="button">
        <button type="submit" data-test="submit" disabled>Submit</button>
      </div>
    </form>
    <hr />
    <h2>data-testid</h2>
    <form>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="name">Name </label>
        </div>
        <input type="text" id="name" name="user-name" data-testid="name" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="mail">Email </label>
        </div>
        <input type="email" id="mail" name="user-email" data-testid="email" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="msg">Message </label>
        </div>
        <textarea id="msg" name="user_message" data-testid="message"> </textarea>
      </div>
      <div class="button">
        <button type="submit" data-testid="submit" disabled>Submit</button>
      </div>
    </form>
    <hr />
    <h2>data-test-id</h2>
    <form>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="name">Name </label>
        </div>
        <input type="text" id="name" name="user-name" data-test-id="name" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="mail">Email </label>
        </div>
        <input type="email" id="mail" name="user-email" data-test-id="email" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="msg">Message </label>
        </div>
        <textarea id="msg" name="user_message" data-test-id="message"> </textarea>
      </div>
      <div class="button">
        <button type="submit" data-test-id="submit" disabled>Submit</button>
      </div>
    </form>
    <hr />
    <h2>data-testing</h2>
    <form>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="name">Name </label>
        </div>
        <input type="text" id="name" name="user-name" data-testing="name" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="mail">Email </label>
        </div>
        <input type="email" id="mail" name="user-email" data-testing="email" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="msg">Message </label>
        </div>
        <textarea id="msg" name="user_message" data-testing="message"> </textarea>
      </div>
      <div class="button">
        <button type="submit" data-testing="submit" disabled>Submit</button>
      </div>
    </form>
    <hr />
    <h2>data-qa</h2>
    <form>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="name">Name </label>
        </div>
        <input type="text" id="name" name="user-name" data-qa="name" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="mail">Email </label>
        </div>
        <input type="email" id="mail" name="user-email" data-qa="email" />
      </div>
      <div style="margin-bottom: 16px;">
        <div>
          <label for="msg">Message </label>
        </div>
        <textarea id="msg" name="user_message" data-qa="message"> </textarea>
      </div>
      <div class="button">
        <button type="submit" data-qa="submit" disabled>Submit</button>
      </div>
    </form>
  </body>
</html>
```
