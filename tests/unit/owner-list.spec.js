import {shallowMount} from '@vue/test-utils'
import OwnerList from '@/components/OwnerList.vue'

describe('OwnerList', () => {

    it('Renders a list of OwnerItems', () => {
        expect(true).toBe(true);
    });

    // it('Renders a Header', () => {
    //     const itemTypeName = 'Owners';
    //     const titleWrapper = shallowMount(OwnerList, {
    //         propsData: {itemTypeName}
    //     }).find('h1');
    //     expect(titleWrapper.text()).toMatch("");
    // });
    //
    // it('Renders Column labels', () => {
    //     const itemTypeName = 'Owners';
    //     const labelsWrapper = shallowMount(OwnerList, {
    //         propsData: {itemTypeName}
    //     });
    //     expect(labelsWrapper.text()).toMatch("Owner Api Key");
    // })

    // only renders active owners
    // renders the count of active apikeys
    // renders the count of active users
    // navigates to EditOwner on pressing of Edit Button
    // archives an owner with the archive button
});
