const MENU = [
  {
    name: '首页页面',
    path: '/main',
    icon: 'main',
    code: 1001000,
    children: [
      {
        name: '首页1-1',
        path: '/main/1-1',
        icon: 'main',
        code: 1001001
      },
      {
        name: '首页1-2',
        path: '/main/1-2',
        icon: 'main',
        code: 1001002
      }
    ]
  },

  {
    name: '关于',
    path: '/about/1-1',
    icon: 'main',
    code: 1002000,
    children: [
      {
        name: '关于1',
        path: '/about/1-1',
        icon: 'main',
        code: 1002001
      },
      {
        name: '关于2',
        path: '/about/1-2',
        icon: 'main',
        code: 1002002
      }
    ]
  },
  {
    name: '我们',
    path: '/us',
    icon: 'main',
    code: 1003000
  }
]

export default MENU
// let newMenu = []
// getMenu()
// // export default MENU
// function getMenu () {
//   let menuArray = [1001001, 1002001]
//   for (let i = 0; i < menuArray.length; i++) {
//     recursive(MENU, menuArray[i])
//   }
//   console.log(newMenu, 123)
// }

// function recursive (menu, code) {
//   const length = menu.length
//   for (let i = 0; i < length; i++) {
//     if (menu[i].children) {
//       recursive(menu[i].children, code)
//     } else if (menu[i].code === code) {
//       newMenu.push(menu)
//     }
//   }
// }
