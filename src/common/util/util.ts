import { Builder } from 'xml2js';

export async function convertJsonToXml(jsonData: any): Promise<string> {
  const builder = new Builder();
  const xmlData = {
    request: jsonData,
  };

  return builder.buildObject(xmlData);
}
