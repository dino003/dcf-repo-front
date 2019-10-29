const titres = state => state.titres

const exercices_budgetaires = state => state.exercices_budgetaires

const natures_sections = state => state.natures_sections
const sections = state => state.sections
const structures_programmes = state=>state.structures_programmes
const structures_administratives = state => state.structures_administratives
const plans_programmes = state => state.plans_programmes
export const plans_programmes_parents = (state, getters) => getters.plans_programmes.filter(plan => plan.parent == null)
const services_gestionnaires = state => state.services_gestionnaires
export const services_gestionnaires_parents = (state, getters) => getters.services_gestionnaires.filter(plan => plan.parent == null)

const chapitres = state => state.chapitres
const grandes_natures = state => state.grandes_natures
const structures_geographiques = state => state.structures_geographiques
const localisations_geographiques = state => state.localisations_geographiques

//  export const monGetterAParcourir = state =>  state.parents.map(element => {
//       if(element.cle_etrangere !== null){
//         element = {
//           ...element,
//           uniteAdmin: state.enfants.find(ua => ua.id == element.cle_etrangere)
//         }
//       }

//       return element;
//    })
 

export const maxNiveauPlanProgramme = state => {
    let tab = []
  state.structures_programmes.forEach(element => {
    tab.push(element.niveau)
  })

    let max = Math.max(...tab)
    return max
  }

  export const maxNiveauStructureAdministrative = state => {
    let tab = []
  state.structures_programmes.forEach(element => {
    tab.push(element.niveau)
  })

    let max = Math.max(...tab)
    return max
  }


export {
    titres,
    exercices_budgetaires,
    natures_sections,
    sections,
    structures_programmes,
    structures_administratives,
    plans_programmes,
    services_gestionnaires,
    chapitres,
    grandes_natures,
    structures_geographiques,
    localisations_geographiques
}






