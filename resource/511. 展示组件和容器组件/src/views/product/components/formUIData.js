export const rules = {
  name: [
    {
      required: true,
      message: '请输入商品名称',
      trigger: 'change',
    },
  ],
  price: [
    {
      required: true,
      message: '请输入商品价格',
      trigger: 'change',
    },
  ],
};

export const services = ['7天无理由退货', '30天保价', '2年只换不修'];

export const formProps = {
  formData: {
    type: Object,
    required: true,
  },
  submitText: {
    type: String,
    default: '提交',
  },
  loading: {
    type: Boolean,
    default: true,
  },
};
