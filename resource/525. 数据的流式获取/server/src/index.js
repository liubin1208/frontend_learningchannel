const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 7010;

const testContent = `
给领导敬酒是一种传统的礼节，但也要考虑场合和文化背景。以下是一些基本的步骤：

**选择合适的时间和场合：**通常在正式的宴会、庆典或重要的商务场合，如年会、合作签约仪式等时给领导敬酒。确保这个时机是合适的，避免在不适当的场合打扰领导。

**准备好酒杯和酒品：**确保有足够的酒杯和所需的酒品，一般选择高质量的酒，比如红酒、白酒或香槟，根据领导的口味和喜好来选择。

**态度诚恳：**在敬酒时，要保持端正的仪态和诚恳的态度。微笑、目光交流和礼貌的言辞是必不可少的。

**恭敬地致辞：**在敬酒前，可以用简短的话语表达对领导的尊重和感谢之情，比如“领导辛苦了，感谢您的领导和关怀。”或者“感谢领导在工作中的支持和指导。”

**端正酒杯，行注目礼：**在敬酒时，双手持杯，将酒杯端正放在眼前，稍微低头，表示敬意。可以说一些祝福的话语，比如“祝领导身体健康，工作顺利。”

**对饮或轻触酒杯：**在领导接受敬酒后，可以与领导对饮或者轻触酒杯，表示敬意和祝福。

**适时退场：**在敬酒结束后，要及时退场，不要打扰领导的工作或与其他人的交流。

总的来说，给领导敬酒是一种表达敬意和感谢的方式，但要注意场合、态度和言行举止，以避免造成不必要的尴尬或误解。`.split(
  ''
);

function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

/**
 * 获取 [min, max] 范围内的随机整数
 * @return {Number}
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

app.post('/chat', async (req, res) => {
  for (const c of testContent) {
    res.write(c);
    await delay(getRandom(3, 30));
  }
  res.end();
});

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
