const components = [
  {
    type: '输入组件',
    child: [
      {
        icon: 'minus-square',
        text: '单行文本框',
        config: {
          label: '单行输入框',
          rules: [],
          placeholder: '',
          el: 'HInput',
          required: true
        }
      },
      {
        icon: 'align-left',
        text: '多行输入框',
        config: {
          label: '多行输入框',
          rules: [],
          placeholder: '',
          el: 'HTextarea',
          required: true
        }
      },
      {
        icon: 'eye-invisible',
        text: '密码输入框',
        config: {
          label: '密码输入框',
          rules: [],
          placeholder: '',
          el: 'HPassword',
          required: true
        }
      }
    ]
  },
  {
    type: '选择型组件',
    child: [
      {
        icon: 'down',
        text: '下拉选择',
        config: {
          label: '下拉选择',
          rules: [],
          placeholder: '',
          el: 'HSelect',
          required: true,
          options: []
        }
      },
      {
        icon: 'swap-right',
        text: '级联选择',
        config: {
          label: '级联选择',
          rules: [],
          placeholder: '',
          el: 'HCascader',
          required: true,
          options: []
        }
      },
      {
        icon: 'check-circle',
        text: '单选框',
        config: {
          label: '单选框',
          rules: [],
          placeholder: '',
          el: 'HRadio',
          required: true,
          options: [],
          isVertical: false
        }
      },
      { icon: 'check-square', text: '多选框' },
      { icon: 'play-circle', text: '开关组件' },
      { icon: 'snippets', text: '日期选择' }
    ]
  },
  {
    type: '提示组件',
    child: [
      {
        icon: 'font-size',
        text: '说明文字',
        config: {
          color: '',
          size: '',
          bold: '',
          align: '',
          indent: ''
        }
      }
    ]
  },
  {
    type: '客户端不可见组件(特殊组件)',
    child: [
      {
        icon: 'sort-ascending',
        text: '生成word',
        config: {
          replaces: [] // 替换集合 {key:value} <=> {搜索字符,替换字符}
        }
      }
    ]
  }
]

export default components
