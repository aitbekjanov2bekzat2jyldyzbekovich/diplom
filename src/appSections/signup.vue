<template></template>

<script>
export default {
  data: () => ({
    title: 'Зарегистрироваться',

    defualtForms: [
      {
        id: 1,
        type: 'email',
        model: 'newEmail',
        placeHolder: 'Введите  Email',
        inputId: 'signUpEmail',
        label: 'Электронный адрес: ',
      },
      {
        id: 2,
        type: 'password',
        model: 'newPassword',
        placeHolder: 'Придумайте пароль',
        inputId: 'signUpPassword',
        label: 'Пароль:',
        show: false,
      },
    ],
    userForm: [
      {
        id: 1,
        type: 'text',
        model: 'userName',
        placeHolder: 'Введите имя',
        label: 'Имя:',
        
      },
    ],
  }),
}
</script>
