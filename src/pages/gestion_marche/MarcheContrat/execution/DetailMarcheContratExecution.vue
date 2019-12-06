<template>
    <div>
        <notifications />
        <div class="quick-actions_homepage" v-if="detailMarcheExecute">
            <ul class="quick-actions">
                <li class="bg_lo span3"> <a href="#" >
                    <h4>
                    {{ formatageSomme(parseFloat(detailMarcheExecute.montant_reel_ttc)) || 'Non renseigné'}}
                </h4>  Montant de démarrage</a> </li>
                <li class="bg_lg span3"> <a href="#"> <h4>
                    {{ formatageSomme(parseFloat( summAvenant(detailMarcheExecute.id))) || 'Non renseigné'}}
                </h4> Montant avec avenant</a> </li>
                <!--<li class="bg_ly span3"> <a href="#"> <i class="icon-pencil"></i> Le marché a ete difére </a> </li>-->

            </ul>
        </div>
        <div class="container-fluid" >
            <div class="row-fluid">
                <div class="span4"></div>
                </div>
            <div class="row-fluid">
                <div class="span12" >
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1">Information sur le marche</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2">Liste des decomptes</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Liste des avenants</a></li>
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="row-fluid" style="margin: 0px">
                                    <div class="span4">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                <h5>Information du marche</h5>
                                            </div>
                                            <div class="widget-content">
                                                <table class="table  table-invoice" v-if="detailMarcheExecute">
                                                    <tbody>
                                                    <tr>
                                                        <td class="width20">Etat :</td>
                                                        <td class="width80" v-if="detailMarcheExecute.date_livraison!=undefined">
                                                            <button class="btn btn-warning" v-if="detailMarcheExecute.date_ordre_demarrage>compareDataToday">Non démarré</button>
                                                            <button class="btn btn-success" v-else-if="detailMarcheExecute.date_ordre_demarrage<=compareDataToday && detailMarcheExecute.date_livraison>=compareDataToday">En cours d'excution</button>
                                                            <button class="btn btn-danger"  v-else-if="detailMarcheExecute.date_livraison<compareDataToday">Terminé</button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="width20">Numero de marche :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.numero_marche}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Objet de marche :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.objet}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type de marche:</td>
                                                        <td><strong>{{detailMarcheExecute.type_marche.libelle}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date debut && fin:</td>
                                                        <td><strong>{{formaterDate(detailMarcheExecute.date_ordre_demarrage)  || "Non Renseigne" }} && {{formaterDate(detailMarcheExecute.date_livraison)  || "Non Renseigne" }}</strong></td>
                                                    </tr>
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span4">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                <h5>Information du prestataire</h5>
                                            </div>
                                            <div class="widget-content">
                                                <table class="table  table-invoice" v-if="detailMarcheExecute">
                                                    <tbody>
                                                    <tr>
                                                        <td class="width20">Raison social :</td>
                                                        <td class="width80">
                                                            {{detailMarcheExecute.entreprise.raison_sociale}}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Sigle :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.sigle}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Numero compte contribuable:</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.numero_cc}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Numero registre de commerce:</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.numero_rc}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Forme juridique :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.forme_juridique}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Email :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.email}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Telephone :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.telephone}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Adresse :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.adresse}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Banque :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.banque}}</strong></td>
                                                    </tr>

                                                    </tbody>

                                                </table> </div>
                                        </div>
                                    </div>
                                    <div class="span4">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                <h5>Information de l'unite administrative</h5>
                                            </div>
                                            <div class="widget-content">
                                                <table class="table  table-invoice" v-if="detailMarcheExecute">
                                                    <tbody>
                                                    <tr>
                                                        <td class="width20">Code unite administrative :</td>
                                                        <td class="width80">
                                                            {{detailMarcheExecute.entreprise.code}}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Nom unite administrative :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.uniteAdmin.libelle}}</strong></td>
                                                    </tr>

                                                    </tbody>

                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab2" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                        <h5>Liste des decomptes</h5>
                                    </div>
                                    <div class="widget-content">

                                    </div>
                                </div>
                            </div>
                            <div id="tab3" class="tab-pane">
                                <div class="">
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                                <h5>Liste des avenants</h5>
                                            </div>
                                            <div class="widget-content nopadding">
                                                <table class="table table-bordered" v-if="detailMarcheExecute" >
                                                    <thead>
                                                    <tr>
                                                        <th>Objet</th>
                                                        <th>Date</th>
                                                        <th>Montant</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="item in listeAvenant(detailMarcheExecute.id)" :key="item.id" >
                                                        <td>{{item.objet || "Pas de conge" }}</td>
                                                        <td>{{formaterDate(item.date) }}</td>
                                                        <td>{{formatageSomme(parseFloat(item.montant))|| "Pas de conges"}}</td>
                                                        <td>
                                                            <div class="btn-group">

                                                                <button @click.prevent="supprimerAvenants(item.id)"  class="btn btn-danger ">
                                                                    <span class=""><i class="icon-trash"></i></span>
                                                                </button>
                                                            </div>

                                                        </td>

                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="span6">
                                        <div class="widget-box" v-if="detailMarcheExecute">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                                <h5>Ajouter Avenant</h5>
                                            </div>
                                            <form  method="post" @submit.prevent="ajouterAvenants" enctype="multipart/form-data" class="form-horizontal">
                                            <div class="widget-content">
                                                <div class="controls">
                                                    <input type="text" placeholder="Objet de l'avenant" class="span12 m-wrap" v-model="avenant_m.objet">
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date avenant</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="avenant_m.date" class="span11" placeholder="Enter date" :min="detailMarcheExecute.date_ordre_demarrage">
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label">Montant avenant</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Entre le montant" v-model="avenant_m.montant">
                                                    </div>
                                                </div>

                                            </div>
                                                <div class="form-actions">
                                                    <button type="submit" class="btn btn-success">Enregistre</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div id="tab4" class="tab-pane">

                               <div class="row-fluid">
                                   5555
                               </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    </div>
</template>

<script>
    import moment from "moment";
    //import {  ModelListSelect } from 'vue-search-select'
   // import 'vue-search-select/dist/VueSearchSelect.css'
    import {mapGetters, mapActions} from 'vuex'
    import {formatageSomme} from "../../../../vuex/modules/guei/Repositories/Repository"
    export default {
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                ],
                acteur_id:"",
                fin_contra:{
                    date_fin_contrat:"",
                    id:""
                },
                interruption_systeme:{
                    date_interuption:"",
                    id:""
                },
                ajouter:true,
                selectedFile:"",
                selectedImage:"",
                image: "",
                imagePDF: "",
                namePDF: "",
                fichierPDF: "",
                date_arrivee_act_nomination:"",
                info_img:false,
                info_pdf:false,
                liste:[],
                nbr:"",
                forma:"",
                compareDate:false,
                formData : {
                    etapes_marche_id:"",
                    marche_contrat_id:"",
                    date_presence:"",
                    user_id:"",
                    observation:"",
                    decision:"",
                    motif:""
                },
                marche_finnancement:{
                    montant_prevue:"",
                    sources_financement_id:"",
                    types_financement_id:"",
                    marche_contrat_id:""
                },
                document_presence:{
                    code:"",
                    libelle:"",
                    type_docuement_id:"",
                    presence_cf_id:"",
                },
                avenant_m:{
                    objet	: "",
                    date: "",
                    montant: "",
                    marche_contrat_id: "",
                },
                editTitre: {
                    code: "",
                    libelle: ""
                },
                temp_moyen_testFI:"",
                detailMarcheExecute:""
            };
        },
        created() {

            this.marche_id=this.$route.params.id;
            this.detailMarcheExecute=this.marche_contrat_en_execution_personnalise.find(marche=>marche.id===this.marche_id);
            console.log(this.detailMarcheExecute)

        },

        computed: {
            ...mapGetters("gestionMarche", ["detail_marche_contrat","presence_cf_marche","etape_marches",
                "decision_marche_cf","document_presence_by_marche","entreprises","deatil_marche_back_end",
                "detail_marche_finance","marche_contrat_personnalise","marche_contrat_en_execution_personnalise","avenant"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
            ...mapGetters("parametreGenerauxSourceDeFinancement",["sources_financements","types_financements"]),

    compareDataToday(){
    const date = new Date();

    const today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
        '-' + date.getDate().toString().padStart(2, 0);
    return today
       }
    ,
            listeAvenant(){
                return  id_marche=>{
                    if (id_marche!=="") {
                        return this.avenant.filter( element=> element.marche_contrat_id === id_marche)
                    }
                }

            },

            summAvenant(){
                return  id_marche=>{
                    if (id_marche!=="") {
                        let initialValue = 0;
                        let vm = this;
                        let ObjetAvenant=this.avenant.filter( element=> element.marche_contrat_id === id_marche)
                        if (ObjetAvenant.length>0){
                            let sum=ObjetAvenant.reduce(function (total, currentValue) {
                                return total + parseFloat(currentValue.montant) ;
                            }, initialValue);

                            let total= parseFloat(vm.detailMarcheExecute.montant_reel_ttc) + parseFloat(sum)
                            return total
                        }
                       return parseFloat(vm.detailMarcheExecute.montant_reel_ttc);
                    }
                }

            },


        },
        methods: {

            ...mapActions('gestionMarche', ['ajouterMarcheContrat',"detailMarcheContrat","marchePresenceCf",
                "ajouterDocumentPresence","supprimerPresenceCF","ajouterPresenceCF","getDecisionMarche",
                "getDocumentByPresenceOfMarche","supprimeDocumentPresenceCF",
                "modifierMarcheContrat","detailMarcheBack_end","ajouterSourceFinnancementByMarche",
                "supprimerSourceFinnancementByMarche","modifierSourceFinnancementByMarche","detailMarcheFinnance","getAvenant","ajouterAvenant","supprimerAvenant","modifierAvenant","getMarcheContratExecution"]),

            formatageSomme:formatageSomme,
           formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
        },
            ajouterAvenants(){
                this.avenant_m.marche_contrat_id=this.detailMarcheExecute.id
                this.ajouterAvenant(this.avenant_m)
                this.avenant_m={
                       objet: "",
                        date: "",
                        montant: "",
                        marche_contrat_id: "",
                }

            },

            supprimerAvenants(id){
                this.supprimerAvenant(id)
                setTimeout(function () {
                    this.getMarcheContratExecution()
                    setTimeout(function () {  this.detailMarcheExecute=this.marche_contrat_en_execution_personnalise.find(marche=>marche.id===this.marche_id);}.bind(this), 2000)
                }.bind(this), 3000)
            }

        }
        ,
       /* components:{
            ModelListSelect,

        },*/
    };
</script>
<style scoped>

</style>
