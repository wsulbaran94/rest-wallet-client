
export class SoapService {
  urlSoap = process.env.SOAP_SERVER;

  async requestSoap(path: string, data: any) {
    try {
      const headers = {
        'Content-Type': 'text/xml',
      };

      const response = await fetch(this.urlSoap + path, {
        method: 'POST',
        headers: headers,
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.text(); // o await response.json() si esperas un JSON
      return responseData;
    } catch (error) {
      console.error('Error al registrar el cliente:', error);
      throw error;
    }
  }
}
