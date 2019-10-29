const typeTextes = state => state.typeTextes;

const uniteAdministratives = state => state.uniteAdministratives;
const archivageDocuments = state => state.archivageDocuments;

export const nombreUniteAdministratives = state =>
  state.uniteAdministratives.length;
export const nombreArchivageDocument = state => state.archivageDocuments.length;
export const nombreTypeText = state => state.typeTextes.length;
// const listeDocUniteAdministratives = state =>
//   state.listeDocUniteAdministratives;
// const nbreUniteAdministratives = state => state.nbreUniteAdministratives;
// const nbreTypeTextes = state => state.nbreTypeTextes;

export const Unite_Administrative = (state, getters, rootState, rootGetters) =>
  state.uniteAdministratives.map(element => {
    if (element.section_id !== null && element.chapitre_id !== null) {
      element = {
        ...element,
        sections: rootGetters['parametreGenerauxAdministratif/sections'].find(
          section => section.id == element.section_id
         
        ),
        chapitres: rootGetters['parametreGenerauxAdministratif/chapitres'].find(
          chapitre => chapitre.id == element.chapitre_id
        )
      };
    }

    return element;
  });

  // export const nom_du_getter = (state, getters, rootState, rootGetters) =>
  // state.nom_du_state_parent.map(element => {
  //   if (element.cle_etrangere1 !== null && element.cle_etrangere2 !== null) {
  //     element = {
  //       ...element,
  //       variableAjouter1: rootGetters['module/getterDuModule'].find(
  //         section => section.id == element.cle_etrangere1
         
  //       ),
  //       variableAjouter2: rootGetters['module/getterDuModule'].find(
  //         chapitre => chapitre.id == element.cle_etrangere2
  //       )
  //     };
  //   }

  //   return element;
  // });




export {
  typeTextes,
  uniteAdministratives,
  archivageDocuments

  // listeDocUniteAdministratives,
  // nbreUniteAdministratives,
  // nbreTypeTextes
};
