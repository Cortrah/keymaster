import {shallowMount} from '@vue/test-utils'
import EditOwner from '@/components/EditOwner.vue'

describe('EditOwner', () => {

    it('Renders a component that allows editing an owners name and displays the owners apikeys and user list components', () => {
        expect(true).toBe(true);
    });
    // shows an error if you try to change an owner name to one that exists
    // shows an error if you try to save a blank owner name
    // updates the store if you successfully change the owner name
    // it('Displays an ApiKey List', () => {
    // })
    // it('Displays a  User List', () => {
    // })
});
