<template>
    <div>
        <div class="container-fluid">
            <div class="quick-actions_homepage">
                <ul class="quick-actions">
                    <li class="bg_lb"> <router-link :to="{name: 'Acteur'}" tag="a"><h3>
                        {{totalActeurDepense}} <br/>
                    </h3>
                        <span class="label label-important"></span> Total acteur depense </router-link> </li>
                    <li class="bg_lb "> <router-link :to="{name: 'Acteur'}" tag="a">
                        <h3>
                            {{totalActeurEnctivite}}
                        </h3>
                        Total acteur en activité</router-link>
                    </li>
                    <li class="bg_lb "> <router-link :to="{name: 'Acteur'}" tag="a">
                        <h3>
                            {{totalActeurAccredite}}
                        </h3>
                        Total acteur accredité</router-link>
                    </li>
                    <li class="bg_lb">
                        <router-link :to="{name: 'Acteur'}" tag="a">  <h3>{{totalActeurNonAccredite}}</h3>
                     Total acteur non accredité
                        </router-link> </li>
                   <li class="bg_lb">
                       <router-link :to="{name: 'Acteur'}" tag="a">  <h3>{{tauxActeurAccredite}} %</h3>
                           Taux acteurs acredité </router-link></li>


                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],


            };
        },

        created() {
            // this.$dialog
            // .confirm('Please confirm to continue')
            // .then(function(dialog) {
            //     console.log('Clicked on proceed');
            // })
            // .catch(function() {
            //     console.log('Clicked on cancel');
            // });
            // this.$dialog.alert('Request completed!').then(function(dialog) {
            //      console.log('Closed');
            // });

//             this.$dialog
//   .prompt({
//     title: "Let's hear from you",
//     body: "What is the most important thing in life?",
//     promptHelp: 'Type in the box below and click "[+:okText]"'
//   })
//   .then(dialog => {
//     // Triggered when proceed button is clicked
//     // Show an alert with the user's input as the message
//     this.$dialog.alert(dialog.data || '[empty]')
//   })
//   .catch(() => {
//     // Triggered when dialog is dismissed by user
 
//     console.log('Prompt dismissed');
//   }); 
this.$dialog
  .confirm("If you delete this record, it'll be gone forever.", {
     // default: false - when set to true, the proceed button shows a loader when clicked.
    // And a dialog object will be passed to the then() callback
  })
  .then(dialog => {
    // Triggered when proceed button is clicked
 
    // dialog.loading(false) // stops the proceed button's loader
    // dialog.loading(true) // starts the proceed button's loader again
    // dialog.close() // stops the loader and close the dialog
 
    // do some stuff like ajax request.
    setTimeout(() => {
      console.log('Delete action completed ');
      dialog.close();
    }, 2500);
  })
  .catch(() => {
    // Triggered when cancel button is clicked
 
    console.log('Delete aborted');
  });
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions",
                "grades","niveau_etudes","nbr_acteur_actredite_taux","all_acteur_depense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"])
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),

        }
    };
</script>

