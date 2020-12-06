import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MymessagesComponent } from './mymessages/mymessages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { PortfolioListComponent } from './myportfolio/portfolio-list/portfolio-list.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ToolsComponent } from './tools/tools.component';
import { LinksComponent } from './links/links.component';
import { LoginComponent } from './login/login.component';
import { PortfolioDetailComponent } from './myportfolio/portfolio-detail/portfolio-detail.component';
import { PanelComponent } from './panel/panel.component';
import { BlogListComponent } from './myblog/blog-list/blog-list.component';
import { BlogListResolver } from './_resolvers/blog-list.resolver';
import { BlogDetailComponent } from './myblog/blog-detail/blog-detail.component';
import { BlogNewComponent } from './myblog/blog-new/blog-new.component';
import { PortfolioUpdateComponent } from './myportfolio/portfolio-update/portfolio-update.component';
import { PortfolioNewComponent } from './myportfolio/portfolio-new/portfolio-new.component';
import { ListsComponent } from './lists/lists.component';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesComponent } from './messages/messages.component';
import { MessagesResolver } from './_resolvers/messages.resolver';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
          { path: 'mymessages', component: MymessagesComponent },
          { path: 'panel', component: PanelComponent},
          { path: 'new-post', component: BlogNewComponent},
          { path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
          { path: 'lists', component: ListsComponent, resolve: {users: ListsResolver }},
          {path: 'member/edit', component: MemberEditComponent,
            resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
          { path: 'udpate-portfolio', component: PortfolioUpdateComponent},
          { path: 'new-portfolio', component: PortfolioNewComponent}
      ]
    },
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogListComponent,
    resolve: { blogs: BlogListResolver }},
    { path: 'blog/:id', component: BlogDetailComponent},
    { path: 'portfolio', component: PortfolioListComponent},
    { path: 'portfolio/:id', component: PortfolioDetailComponent},
    { path: 'tools', component: ToolsComponent},
    { path: 'links', component: LinksComponent},
    { path: 'members', component: MemberListComponent,
     resolve: { users: MemberListResolver}},
    { path: 'members/:id', component: MemberDetailComponent,
    resolve: { user: MemberDetailResolver }},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

