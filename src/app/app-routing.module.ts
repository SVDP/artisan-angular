import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'discover',
        pathMatch: 'full'
    },
    {
        path: 'discover',
        loadChildren: './discover/discover.module#DiscoverPageModule'
    },
    {
        path: 'match',
        loadChildren: './match/match.module#MatchPageModule'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
