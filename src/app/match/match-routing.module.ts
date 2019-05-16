import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MatchPage } from './match.page'

const routes: Routes = [
    {
        path: 'tabs',
        component: MatchPage,
        children: [
            {
                path: 'swipe',
                children: [
                    {
                        path: '',
                        loadChildren: './swipe/swipe.module#SwipePageModule'
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren:
                            './settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'match/tabs/swipe',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'match/tabs/swipe',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchRoutingModule {}
