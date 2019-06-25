import {mount} from '@vue/test-utils'
import {v4 as createUUId} from 'uuid';

import ApiKey from '@/domain/ApiKey';
import Owner from '@/domain/Owner';
import ApiKeyItem from '@/components/ApiKeyItem.vue'

describe('ApiKeyItem', () => {

    const apiKeyObj = new ApiKey({id: createUUId(), apiKey: createUUId()});
    const apiKeyItemWrapper = mount(ApiKeyItem, {
        propsData: {
                owner: new Owner(),
                apiKey: apiKeyObj
            }
    });
    const keyTextInput = apiKeyItemWrapper.find('#keyText_' + apiKeyObj.id);
    const toggleBtn = apiKeyItemWrapper.find('#apiKeyBtn_' + apiKeyObj.id);

    it('Renders an ApiKey, obscuring the value by default.', () => {
        expect(keyTextInput.element.value).toBe(apiKeyObj.getTruncatedValue());
    });

    it('Allows toggling to show the full key value', () => {
        toggleBtn.trigger('click');
        expect(keyTextInput.element.value).toBe(apiKeyObj.getValue());
    });
});

