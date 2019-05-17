import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DiscoverPage } from './discover.page'

const routes: Routes = [
    {
        path: 'tabs',
        component: DiscoverPage,
        children: [
            {
                path: 'shots',
                children: [
                    {
                        path: '',
                        loadChildren: './shots/shots.module#ShotsPageModule',
                    },
                ],
            },
            {
                path: 'creatives',
                children: [
                    {
                        path: '',
                        loadChildren: './creatives/creatives.module#CreativesPageModule',
                    },
                    {
                        path: ':creativeId',
                        loadChildren: './creatives/creative-detail/creative-detail.module#CreativeDetailPageModule',
                    },
                ],
            },
            {
                path: '',
                redirectTo: 'discover/tabs/shots',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: 'discover/tabs/shots',
        pathMatch: 'full',
    },
    {
        path: 'creative-detail',
        loadChildren: './creatives/creative-detail/creative-detail.module#CreativeDetailPageModule',
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DiscoverRoutingModule {}
