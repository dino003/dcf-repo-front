import budgetGeneral from "../../pages/planification_budgetaire/budgetGeneral.vue";
import detailBudgetGeneral from "../../pages/planification_budgetaire/detailBudgetGeneral.vue"
const planificationBudgetaireRoutes = [
    {
        path: "/budgetGeneral",
        name: "budgetGeneral",
        component: budgetGeneral
    },
    //detail immobilisation
    {
        path: "/Detail-budgetGeneral/:id_budgetGeneral",
        name: "detailBudgetGeneral",
        component: detailBudgetGeneral
    }
];

export default planificationBudgetaireRoutes;
