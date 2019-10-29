
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">

        <div class="widget-box">
             <div class="widget-title">

                <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des titres</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search" >

          </div>
             
          </div>

          <div class="widget-content nopadding">
            <div align="left">
              Montrer: <select name="pagination" @change="getPagination($event)">
                     <option value="2">2</option>
                     <option value="3">3</option>

                  <option value="5">5</option>
                   <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>

              </select>
            </div>
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Libelle</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(titre, index) in displayedPosts" :key="titre.id">
                  <td @dblclick="afficherModalModifierTitre(index)">{{titre.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTitre(index)">{{titre.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerTitre(titre.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
               <div class="clearfix btn-group col-md-2 offset-md-5 pull-right">
            <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> << </button>
            <button type="button" class="btn btn-sm btn-outline-secondary"  v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
            <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
          </div>
            <div v-if="titreFiltres.length">
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucun titre enregistrer !</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
            </div>

                <fab :actions="fabActions"
       @cache="afficherModalAjouterTitre"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter un titre</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span"
                 placeholder="Saisir le code" />
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
             <button v-show="formData.code.length && formData.libelle.length"  
             @click.prevent="ajouterTitreLocal"  class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier un titre</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
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
             <button v-show="editTitre.code.length && editTitre.libelle.length"
             @click.prevent="modifierTitreLocal(editTitre)" class="btn btn-primary"
            >Modifier</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->







  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
  import { ModelSelect, ModelListSelect } from 'vue-search-select'

import {mapGetters, mapActions, mapMutations} from 'vuex'
//import Filtrer from '../../../../utils/filtre'
export default {
    components:{
        //resultat,
        ModelSelect,
        ModelListSelect,
    },
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
          page: 1,
        perPage: 2,
        pages: [],
     
        formData : {
                code: "",
             libelle: ""
        },

        editTitre: {
            code: "",
             libelle: ""
        },
        search: "",
 
    };
  },
 
  created() {
   // this.getTitres()
   //console.log(typeof(VERIF_CODE()))
  //  this.$dialog
  // .confirm("If you delete this record, it'll be gone forever.", {
  //    // default: false - when set to true, the proceed button shows a loader when clicked.
  //   // And a dialog object will be passed to the then() callback
  // })
  // .then(dialog => {
  //   // Triggered when proceed button is clicked
 
  //   // dialog.loading(false) // stops the proceed button's loader
  //   // dialog.loading(true) // starts the proceed button's loader again
  //   // dialog.close() // stops the loader and close the dialog
 
  //   // do some stuff like ajax request.
  //   setTimeout(() => {
  //     console.log('Delete action completed ');
  //     dialog.close();
  //   }, 2500);
  // })
  // .catch(() => {
  //   // Triggered when cancel button is clicked
 
  //   console.log('Delete aborted');
  // });
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['titres']),  

  titreFiltres() {

const searchTerm = this.search.toLowerCase();

return this.titres.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 

   }
)

},

 displayedPosts () {
            return this.paginate(this.titreFiltres);
        }
  },

     watch: {
        titreFiltres (newValue) {
            this.setPages();
        }
    },

  methods: {
        setPages () {
            let numberOfPages = Math.ceil(this.titreFiltres.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },

        getPagination(event){
          this.perPage = parseInt(event.target.value)
            // let numberOfPages = Math.ceil(this.titreFiltres.length / this.perPage);
            // for (let index = 1; index <= numberOfPages; index++) {
            //     this.pages.push(index);
            // }
        },
        paginate (titreFiltres) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  titreFiltres.slice(from, to);
        },
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['ajouterTitre', 'supprimerTitre', 'modifierTitre']),   
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
    ...mapMutations('parametreGenerauxAdministratif', ['VERIF_CODE']),
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterTitre(this.formData)

        this.formData = {
                code: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierTitre(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });


        this.editTitre = this.titres[index];


        
 },
// vider l'input modifier

modifierTitreLocal() {
  this.modifierTitre(this.editTitre)
  this.editTitre = {
    code:"",
    libelle:""
  }
}
  }
};
</script>

