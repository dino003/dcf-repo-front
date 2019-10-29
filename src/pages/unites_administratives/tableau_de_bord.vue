
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->

    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Tableau de Bord Unité Administrative</h5>
            </div>
            <BR />
            <BR />
            <div class="widget-box widget-plain">
              <div class="center">
                <ul class="stat-boxes2">
                  <li>
                    <div class="right">
                      <strong>{{nombreUniteAdministratives}}</strong> UNITE ADMINISTRATIVE
                    </div>
                  </li>
                  <li>
                    <div class="right">
                      <strong>{{nombreArchivageDocument}}</strong> ARCHIVAGE DOCUMENT
                    </div>
                  </li>
                  <li>
                    <div class="right">
                      <strong>{{nombreTypeText}}</strong> TYPE DE TEXTE
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped"></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "nombreTypeText",
      "nombreUniteAdministratives",
      "nombreArchivageDocument"

      // "nbreArchivageNotes"
    ]),
    filtre_archivage_document() {
      const st = this.search.toLowerCase();
      return this.archivageDocuments.filter(archivagedocument => {
        return (
          archivagedocument.reference.toLowerCase().includes(st) ||
          archivagedocument.unite_administrative.libelle
            .toLowerCase()
            .includes(st) ||
          archivagedocument.type_texte.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {}
};
</script>



<style>
.nbre {
  background-color: #27a9e3;
}
.center {
  margin: 5px 270px 5px;
}
</style>
