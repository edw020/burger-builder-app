import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () =>{
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
    });

    it('Should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ingredients: {salad: 0}});

        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

    describe('[purchaseCancelHandler] function', () => {
        it('should set state.purchasing to false', () => {
            wrapper.setState({purchasing: true});
            wrapper.instance().purchaseCancelHandler();

            expect(wrapper.state('purchasing')).toEqual(false);
        });
    });

    describe('[updatePurchaseState] function', () => {
        it('should return true if at least one ingredient is added', () => {
            expect(wrapper.instance().updatePurchaseState({salad: 1})).toEqual(true);
        });

        it('should return false if ingredients are empty', () => {
            expect(wrapper.instance().updatePurchaseState({})).toEqual(false);
        });
    });
});