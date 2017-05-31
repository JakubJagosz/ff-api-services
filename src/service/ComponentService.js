import HttpClient, {APIMapping} from '../http';

export default class ComponentService {

    static client = new HttpClient(APIMapping.componentService);

    static getComponents(viewName) {
        return ComponentService.client.makeRequest({}, `/components?viewName=${viewName}`, 'GET');
    }

    /**
     * The data format looks like this:
     * {
     *      "id": ...,
     *      "viewName": ...,
     *      "niceName": ...,
     *      "url": ...,
     *      "pluginType": ...,
     *      "pluginScope": ...,
     *      "schemaId": ...
     * }
     *
     * @param data
     */
    static createComponent(data) {
        return ComponentService.client.makeRequest({}, '/components', 'POST', data);
    }

    static deleteComponent(id) {
        return ComponentService.client.makeRequest({}, `/components/${id}`, 'DELETE')
    }
}