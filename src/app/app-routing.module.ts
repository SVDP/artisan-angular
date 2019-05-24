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
        path: 'profile',
        loadChildren: './profile/profile.module#ProfilePageModule'
    },
    {
        path: 'edit-profile',
        loadChildren: './profile/edit-profile/edit-profile.module#EditProfilePageModule'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
