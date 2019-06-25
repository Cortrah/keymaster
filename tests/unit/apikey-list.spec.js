import {mount} from '@vue/test-utils'
import {v4 as createUUId} from 'uuid';

import Owner from '@/domain/Owner';
import ApiKey from '@/domain/ApiKey';
import ApiKeyItem from "../../src/components/ApiKeyItem";
import ApiKeyList from '@/components/ApiKeyList.vue'

describe('ApiKeyList', () => {
    const owner = new Owner({id: createUUId(), apiKeys:[
            new ApiKey({id: createUUId(), apiKey: createUUId()}),
            new ApiKey({id: createUUId(), apiKey: createUUId()})
        ]
    });
    const apiKeyListWrapper = mount(ApiKeyList, {
        propsData: {
            owner: owner,
        }
    });

    it('Given an Owner with 2 apiKey objects, it renders two apiKeys in the DOM', () => {
        expect(apiKeyListWrapper.findAll(ApiKeyItem).length).toBe(2);
    });
});
