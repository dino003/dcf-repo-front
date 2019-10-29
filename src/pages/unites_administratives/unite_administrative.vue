
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Unité d'Administrative</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Section</label>
            <div class="controls">
              <select v-model="formData.section_id">
                <option
                  v-for=" sect in sections"
                  :key="sect.id"
                  :value="sect.id"
                >{{sect.nom_section}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Chapitre</label>
            <div class="controls">
              <select v-model="formData.chapitre_id">
                <option
                  v-for="chap in chapitres"
                  :key="chap.id"
                  :value="chap.id"
                >{{chap.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Code:</label>
            <div class="controls">
              <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.code.length && formData.libelle.length && formData.section_id && formData.chapitre_id "
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Unité d'Administrative</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Section</label>
            <div class="controls">
              <select v-model="editUniteAdministrative.section_id">
                <option
                  v-for="sect in sections"
                  :key="sect.id"
                  :value="sect.id"
                >{{sect.nom_section}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Chapitre</label>
            <div class="controls">
              <select v-model="editUniteAdministrative.chapitre_id">
                <option
                  v-for="chap in chapitres"
                  :key="chap.id"
                  :value="chap.id"
                >{{chap.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Code:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editUniteAdministrative.code"
                class="span"
                placeholder="Saisir le code"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editUniteAdministrative.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierUniteAdministrativeLocal(editUniteAdministrative)"
          class="btn btn-primary"
          href="#"
          v-show="editUniteAdministrative.code.length && editUniteAdministrative.libelle.length && editUniteAdministrative.section_id && editUniteAdministrative.chapitre_id "
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
          <!-- <div align="right">
            <a class="btn btn-primary" href="#">Imprimer</a>
          </div>-->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des unités d'administrative</h5>
              <div align="right">
                Search:
                <input type="search" v-model="search" />
              </div>
            </div>

            <div v-if="sections.length > 0 && chapitres.length > 0" class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Libelle</th>
                    <th>Section</th>
                    <th>Chapitre</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(uniteadministrative, index) in filtre_ua"
                    :key="uniteadministrative.id"
                  > 
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.sections.nom_section || 'Non renseigné'}}</td>
                    <td 
                      @dblclick="afficherModalModifierUniteAdministrative(index)"
                    >{{uniteadministrative.chapitres.libelle || 'Non renseigné'}}</td>

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

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
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
        chapitre_id: ""
      },
      editUniteAdministrative: {
        code: "",
        libelle: "",
        section_id: "",
        chapitre_id: ""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "uniteAdministratives",
      "Unite_Administrative"
    ]),

      ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections"
      ]),

    filtre_ua() {
      const st = this.search.toLowerCase();
      return this.Unite_Administrative.filter(uniteadministrative => {
        return (
          uniteadministrative.code.toLowerCase().includes(st) ||
          uniteadministrative.libelle.toLowerCase().includes(st) ||
          uniteadministrative.sections.nom_section.toLowerCase().includes(st) ||
          uniteadministrative.chapitres.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllUniteAdministrative",
      "ajouterUniteAdministrative",
      "modifierUniteAdministrative",
      "supprimerUniteAdministrative"
    ]),

    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      this.ajouterUniteAdministrative(this.formData);

      this.formData = {
        code: "",
        libelle: "",
        section_id: "",
        chapitre_id: ""
      };
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
      this.modifierUniteAdministrative(this.editUniteAdministrative);

      this.editUniteAdministrative = {
        code: "",
        libelle: "",
        section_id: "",
        chapitre_id: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editUniteAdministrative = this.uniteAdministratives[index];
    },
    alert() {
      console.log("ok");
    }
  }
};
</script>