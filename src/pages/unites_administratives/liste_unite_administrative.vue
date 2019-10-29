
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <div align="right">
            <div class="controls">
              <div data-toggle="buttons-checkbox" class="btn-group">
                <button class="btn btn-primary" type="button">Imprimer</button>
                <button class="btn btn-success" type="button">Exporter Excel</button>
              </div>
            </div>
          </div>-->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des unité d'administrative</h5>

              <div align="right">
                Search:
                <input type="search" v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Libelle</th>
                    <th>Section</th>
                    <th>Chapitre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(uniteadministrative) in filtre_ua"
                    :key="uniteadministrative.id"
                  >
                    <td>{{uniteadministrative.code || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.libelle || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.sections.nom_section || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.chapitres.libelle || 'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_ua.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Unite D'administrative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // fabActions: [
      //   {
      //     name: "cache",
      //     icon: "add"
      //   }
      // ]
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", ["Unite_Administrative"]),
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
  }
};
</script>