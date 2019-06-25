import {mount} from '@vue/test-utils'
import {v4 as createUUId} from "uuid";

import Owner from '@/domain/Owner';
import OwnerItem from '@/components/OwnerItem.vue'

describe('OwnerItem', () => {

    const ownerObj = new Owner({id: createUUId(), name: "SuperService"});
    const ownerWrapper = mount(OwnerItem, {
        propsData: {
            owner: ownerObj,
        }
    });

    it('Given an Owner object, renders an OwnerItem with it"s id', () => {
        expect(ownerWrapper.find('#ownerItem_' + ownerObj.id).exists());
    });
});
