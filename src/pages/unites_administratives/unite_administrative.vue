
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Unité d'Administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Type Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="formData.type_ua_id">
                      <option
                        v-for="typeUniteA in type_Unite_admins"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Section</label>
                  <div class="controls">
                    <select v-model="formData.section_id">
                      <option
                        v-for="section in sections"
                        :key="section.id"
                        :value="section.id"
                      >{{section.code_section}}-{{section.nom_section}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Chapitre</label>
                  <div class="controls">
                    <select v-model="formData.chapitre_id">
                      <option
                        v-for="chapitre in chapitres"
                        :key="chapitre.id"
                        :value="chapitre.id"
                      >{{chapitre.code}}-{{chapitre.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                 <div class="control-group">
                  <label class="control-label">Plan fonctionnel</label>
                  <div class="controls">
                    <select v-model="formData.planfonctionnel_id">
                      <option
                        v-for="fonctionnel in plans_fonctionnels"
                        :key="fonctionnel.id"
                        :value="fonctionnel.id"
                      >{{fonctionnel.code}}-{{fonctionnel.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Code Unite administrative:</label>
                
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeuniteadministrative"
                      class="span"
                      placeholder="Saisir le code"
                    />
                  </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Nom unite administrative:</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                      v-model="formData.libelle"
                      class="span"
                      placeholder="Saisir le Nom unite administrative"
                     
                    />
               </div>
                </div>
              </td>
            </tr>
            <tr>
             
              <td>
                  <div class="control-group">
                  <label class="control-label">Date création:</label>
                  <div class="controls">
                    <input type="date" v-model="formData.date_creation" class="span" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Unité d'Administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Type Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.type_ua_id">
                      <option
                        v-for="typeUniteA in type_Unite_admins"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Section</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.section_id">
                      <option
                        v-for="section in sections"
                        :key="section.id"
                        :value="section.id"
                      >{{section.code_section}}-{{section.nom_section}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                 <div class="control-group">
                  <label class="control-label">Chapitre</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.chapitre_id">
                      <option
                        v-for="chapitre in chapitres"
                        :key="chapitre.id"
                        :value="chapitre.id"
                      >{{chapitre.code}}-{{chapitre.libelle}}</option>
                    </select>
                  </div>
                </div>
               
              </td>
            </tr>
            <tr>
              <td>
                  <div class="control-group">
                  <label class="control-label">Plan fonctionnel</label>
                  <div class="controls">
                    <select v-model="editUniteAdministrative.planfonctionnel_id">
                      <option
                        v-for="fonctionnel in plans_fonctionnels"
                        :key="fonctionnel.id"
                        :value="fonctionnel.id"
                      >{{fonctionnel.code}}-{{fonctionnel.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Code Unite administrative:</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeuniteadministrativeModifier"
                      class="span"
                      placeholder="Saisir le code"
                    />
                  </div>
                </div>
              </td>
              <td>
               <div class="control-group">
                  <label class="control-label">Nom unite administrative:</label>
                  <div class="controls">
                    <input
                      type="text"
                      v-model="editUniteAdministrative.libelle"
                      class="span"
                      placeholder="Saisir le Nom unite administrative"
                     
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              
             
                <td>
                <div class="control-group">
                  <label class="control-label">Date création:</label>
                  <div class="controls">
                    <input type="date" v-model="editUniteAdministrative.date_creation" class="span" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierUniteAdministrativeLocal(editUniteAdministrative)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Unites administratives"
            :data="jointureUaChapitreSection"
            name="Liste Unites administratives"
            worksheet="Liste Unites administratives"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie section ou libelle" v-model="search" />

                <!-- <div class="span3">
                  <model-list-select
                    v-model="formData.test"
                    style="background-color: rgb(222, 222, 222);"
                    :list="type_Unite_admins"
                    option-value="id"
                    option-text="libelle"
                    placeholder="unite administrative"
                  ></model-list-select>
                </div>
                <button>ok</button>-->
              </div>
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des unité d'administrative</h5>
            </div>

            <div
              class="widget-content nopadding"
              v-if="type_Unite_admins.length && sections.length && chapitres.length "
            >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Type unite administrative</th>
                    <th>Section</th>
                    <th>Chapitre</th>
                     <th>Plan fonctionnel</th>
                    <th>Code</th>
                    <th>Libelle</th>
                    <th>Date création</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(uniteadministrative, index) in filtre_unite_admin"
                    :key="uniteadministrative.id"
                  >
                  
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.typeua.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.secti.nom_section || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.chpitr.libelle || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.planFonction.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{ formaterDate(uniteadministrative.date_creation) || 'Non renseigné'}}</td>

                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerUniteAdministrative(uniteadministrative.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData: {
        code: "",
        libelle: "",
        section_id: "",
        chapitre_id: "",
        type_ua_id: "",
        date_creation: "",
        test: "",
        planfonctionnel_id:""
      },
      editUniteAdministrative: {
        code: "",
        libelle: "",
        section_id: "",
        chapitre_id: "",
        type_ua_id: "",
        date_creation: "",
        planfonctionnel_id:""
      },
      json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        CHAPITRE: "chpitr.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation"
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels"
     
    ]),
    filtre_unite_admin() {
      const st = this.search.toLowerCase();
      return this.jointureUaChapitreSection.filter(items => {
        return (
          items.secti.nom_section.toLowerCase().includes(st) ||
          items.libelle.toLowerCase().includes(st)
        );
      });
    },
    codeuniteadministrative(){
       const section = this.sections.find(sect => sect.id == this.formData.section_id)
     const chapitre = this.chapitres.find(chap => chap.id == this.formData.chapitre_id)
    const planfonctionnel = this.plans_fonctionnels.find(chap => chap.id == this.formData.planfonctionnel_id)

     if(chapitre && planfonctionnel && section){
       return section.code_section + chapitre.code + planfonctionnel.code
     }

     return null
   },
   codeuniteadministrativeModifier(){
      const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
     const chapitre = this.chapitres.find(chap => chap.id == this.editUniteAdministrative.chapitre_id)
    const planfonctionnel = this.plans_fonctionnels.find(chap => chap.id == this.editUniteAdministrative.planfonctionnel_id)

     if(chapitre && planfonctionnel && section){
       return section.code_section + chapitre.code + planfonctionnel.code
     }

     return null
   },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllUniteAdministrative",
      "ajouterUniteAdministrative",
      "modifierUniteAdministrative",
      "supprimerUniteAdministrative"
    ]),

    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      var nouvelObjet = {
        ...this.formData,
        code: this.codeuniteadministrative
       
      };
      this.ajouterUniteAdministrative(nouvelObjet);

      this.formData = {
        code: "",
        libelle: "",
        section_id: "",
        chapitre_id: "",
        type_ua_id: "",
        date_creation: ""
      };
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
         var nouvelObjet = {
        ...this.editUniteAdministrative,
        code: this.codeuniteadministrativeModifier
       
      };
      this.modifierUniteAdministrative(nouvelObjet);
this.$("#modificationModal").modal('hide');
      // this.editUniteAdministrative = {
      //   code: "",
      //   libelle: "",
      //   section_id: "",
      //   chapitre_id: ""
      // };
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editUniteAdministrative = this.jointureUaChapitreSection[index];
    },
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style>

.tailgrand{
  width: 70%;
  margin: 0 -35%;
}

</style>