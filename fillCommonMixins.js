import fetch from 'node-fetch';
import fs from 'fs';

const IGNORED_PROPERTIES = ['--*'];

class FillCommonMixin {
  constructor({ fileName }) {
    this.url =
      'https://raw.githubusercontent.com/shibnev/bo_style/master/allCssProperties.json';

    this.fileName = fileName;

    this.createJSONFile();
  }

  mixinTemplate(property) {
    return `@mixin ${property}($n)\n  +_((${property}: $n))\n`;
  }

  getData() {
    return fetch(this.url).then((response) => response.json());
  }

  fillList() {
    return this.getData().then((list) => {
      const result = [];

      list.forEach((item, index) => {
        if (!IGNORED_PROPERTIES.includes(item)) {
          if (index === 0) {
            result.push(this.mixinTemplate(item));
          } else if (index !== 0 && item.property !== list[index - 1]) {
            result.push(this.mixinTemplate(item));
          }
        }
      });

      return result;
    });
  }

  async createJSONFile() {
    const result = await this.fillList();
    const stringResult = result.join('');

    fs.writeFile(`${this.fileName}`, stringResult, (err) => {
      if (err) throw err;

      console.log(`create file ${this.fileName}`);
    });
  }
}

new FillCommonMixin({ fileName: './src/mixins/common.sass' });
