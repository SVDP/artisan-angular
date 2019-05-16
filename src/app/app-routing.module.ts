import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'discover/tabs/shots',
        pathMatch: 'full'
    },
    {
        path: 'discover',
        loadChildren: './discover/discover.module#DiscoverPageModule'
    },
    {
        path: 'match',
        loadChildren: './match/match.module#MatchPageModule'
    },
    {
        path: 'create',
        loadChildren: './create/create.module#CreatePageModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfilePageModule'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
