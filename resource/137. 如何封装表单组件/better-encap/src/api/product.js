function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export async function getProduct() {
  await delay(2000);
  return {
    name: 'HUAWEI Meta 50',
    price: 4999,
    services: ['7天无理由退货', '30天保价'],
  };
}
