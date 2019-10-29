
const structures_fonctionnelles = state => state.structures_fonctionnelles 
const plans_fonctionnels = state => state.plans_fonctionnels

export const plans_fonctionnels_parents = (state, getters) => getters.plans_fonctionnels.filter(plan => plan.parent == null)



export {

    structures_fonctionnelles,
    plans_fonctionnels
}


