import axios from 'axios';

export const getCustomComponentDetail = async (componentName: string) => {
  const response = await axios.post('https://power-api.yingdao.com/oapi/power/v1/rest/flow/e6d531d2-1eb9-4e2c-9bdc-3c0edb99f3b4/execute', {
    input: {
      input_text_0: {
        type: "text",
        value: `查询${componentName}的引入方式和${componentName}的组件参数`,
      }
    }
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.AP_KEY}`
    }
  });
  return response.data;
};
