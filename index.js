const fs = require('fs');
const os = require('os');

const cpusSaya = os.cpus();

// console.log(os.tmpdir());
// console.log(os.userInfo());

function myMacbook(data) {
  fs.writeFileSync('./data.json', JSON.stringify(data));
}
const fileData = () => {
  const file = fs.readFileSync('./data.json', 'utf-8');
  const datas = JSON.parse(file);
  return datas;
};

function simpanData(data) {
  const datas = fileData();
  const isiData = data;
  datas.push(isiData);
  myMacbook(datas);
}

simpanData({
  user: os.userInfo(),
  loadAverages: os.loadavg(),
  hostname: os.hostname(),
  platform: os.platform(),
  release: os.release(),
});
