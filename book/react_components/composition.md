# Components are Bricks

<img src="../../images/lego-bricks.png" style="width: 50%; margin: 0 auto; display: block;" />

- Think of them as Lego bricks
- Build small components that together build larger components, screens
- Composition is key!

## Composition

We compose these bricks to build larger things

```html
<!-- LoginForm.js -->

<Form>
  <FormGroup>
    <Label>Username</Label>
    <Input name="username" />

    <Label>Password</Label>
    <Input name="password" />
  </FormGroup>

  <Button>Submit</Button>
</Form>
```
