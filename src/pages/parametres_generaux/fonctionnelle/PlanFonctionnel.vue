
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>

              <div class="row-fluid">
     
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>Liste plans fonctionnels</h5>
          </div>
          <div class="widget-content"> 
                <ul id="demo">
            <treeFonctionnel class="item" v-for="plan_fonctionnel in plans_fonctionnels_parents"
            :key="plan_fonctionnel.id"
             :item="plan_fonctionnel"
             @make-modification="afficherModalModifierPlanProgramme"
              @create-children="makeChildren" 
              @make-delete="supp"
              ></treeFonctionnel>
          </ul>
             </div>
        </div>
      </div>
    </div> 
        <!--
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des plans fonctionnelles</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                 <th>Niveau</th>
                  <th>Libelle</th>
                  <th>Structure fonctionnelles</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(plan_fonctionnel, index) 
                in localisationsFiltre" :key="plan_fonctionnel.id">
                  <td @dblclick="afficherMoadlModifierLocalisation(index)">
                    {{plan_fonctionnel.code || 'Non renseigné'}}</td>
                   <td @dblclick="afficherMoadlModifierLocalisation(index)">
                    {{plan_fonctionnel.libelle || 'Non renseigné'}}</td>
                    
                   <td @dblclick="afficherMoadlModifierLocalisation(index)">
                      {{plan_fonctionnel.structure_fonctionnelle.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerPlanFonctionnel(plan_fonctionnel.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
              </div>

              -->
            </div>

                <fab :actions="fabActions"
       @cache="afficherModalAjouterTitre"
        bg-color="green"

  ></fab>

  <!----- ajouter modal plan enfant  ---->


 <div id="modalAjouterPlanEnfant" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter un plan fonctionnel</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                     <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="text" readonly v-model="planParent.code" class="span"  />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" readonly v-model="planParent.libelle" class="span"  />
              </div>
            </div>

                   <div class="control-group">
              <label class="control-label">Structure foctionnelle:</label>
              <div class="controls">
                <select  v-model="nouveauPlanEnfant.structure_fonctionnelle_id">
            <option v-for="plan in structures_fonctionnelles" :key="plan.id" 
            :value="plan.id">{{plan.libelle}}</option>
                </select>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="text" v-model="nouveauPlanEnfant.code" class="span" placeholder="Saisir le niveau" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="nouveauPlanEnfant.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
           
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="nouveauPlanEnfant.structure_fonctionnelle_id && nouveauPlanEnfant.code.length && 
             nouveauPlanEnfant.libelle.length"
              @click.prevent="ajouterProgrammeEnfant" class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  plan enfant  ---->

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan fonctionnel</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                   <div class="control-group">
              <label class="control-label">Structure foctionnelle:</label>
              <div class="controls">
                <select  v-model="formData.structure_fonctionnelle_id">
            <option v-for="plan in structures_fonctionnelles" :key="plan.id" 
            :value="plan.id">{{plan.libelle}}</option>
                </select>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le niveau" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
           
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.structure_fonctionnelle_id && formData.code.length && 
             formData.libelle.length"
              @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier plan fonctionnel</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                   <div class="control-group">
              <label class="control-label">Structure fonctionnel:</label>
              <div class="controls">
                <select  v-model="editTitre.structure_fonctionnelle_id">
            <option v-for="plan in structures_fonctionnelles" :key="plan.id" 
            :value="plan.id">{{plan.libelle}}</option>
                </select>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editTitre.structure_fonctionnelle_id && editTitre.code.length && 
             editTitre.libelle.length"
             @click.prevent="modifierLocalisationLocal(editTitre)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->







  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import treeFonctionnel from './treeFonctionnel'
export default {
  components: {treeFonctionnel},
  data() {
    return {
        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
        formData : {
                code: "",
             libelle: "",
             structure_fonctionnelle_id:""
        },

            planParent: {},
          nouveauPlanEnfant: {
            parent: "",
            code: "",
            libelle: "",
            structure_fonctionnelle_id:""

          },

        editTitre: {
            code: "",
             libelle: "",
             structure_fonctionnelle_id:""
        },
           search:""
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxFonctionnelle', ['structures_fonctionnelles', 
  'plans_fonctionnels', 'plans_fonctionnels_parents']),
  
     
        localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.plans_fonctionnels.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxFonctionnelle', ['getPlanFonctionnelle', 
    'ajouterPlanFonctionnel', 
   'supprimerPlanFonctionnel', 'modifierPlanFonctionnel']),     
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },

        supp(item){
      this.supprimerPlanFonctionnel(item.id)
      this.getPlanFonctionnelle();
    },

    makeChildren(item) {
    this.planParent = this.plans_fonctionnels.find(plan => plan.id == item.id)
   
     this.nouveauPlanEnfant.parent = this.planParent.id
    // this.nouveauPlanEnfant.code = parseInt(this.planParent.code) + 1

      this.$('#modalAjouterPlanEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

   // console.log(item.id)
    },

    // ajouter plan programme enfant
         ajouterProgrammeEnfant () {
      this.ajouterPlanFonctionnel(this.nouveauPlanEnfant)
       this.getPlanFonctionnelle();
      this.$('#modalAjouterPlanEnfant').modal('hide')
        this.nouveauPlanEnfant = {
             libelle: "",
          structure_fonctionnelle_id:""
        }
     // console.log(this.nouveauPlanEnfant)
    },

    afficherModalModifierPlanProgramme(item){
  this.editTitre = item;
// var index = this.plans_programmes.findIndex(plan => plan.id == item.id)
 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });
  //console.log(item)
 // this.editPlanProgramme = this.plans_programmes[index];

      
 },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterPlanFonctionnel(this.formData)

        this.formData = {
                code: "",
             libelle: "",
              structure_fonctionnelle_id:""
        }
    },
// afficher modal
afficherMoadlModifierLocalisation(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.plans_fonctionnels[index];


        
 },
modifierLocalisationLocal(){
  this.modifierPlanFonctionnel(this.editTitre)
  this.editTitre = {
                code: "",
             libelle: "",
             structure_fonctionnelle_id:""
  }
}

  }
};
</script>

