import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-bottomnav-routing-sample',
    styleUrls: ['bottomnav-routing.sample.css'],
    templateUrl: 'bottomnav-routing.sample.html'
})
export class BottomNavRoutingSampleComponent {

    constructor(private router: Router) {
    }

    public navigateUrl1() {
        this.router.navigateByUrl('/bottom-navigation-routing/view1');
    }

    public navigateUrl2() {
        this.router.navigateByUrl('/bottom-navigation-routing/view2');
    }

    public navigateUrl3() {
        this.router.navigateByUrl('/bottom-navigation-routing/view3');
    }
}

@Component({
    selector: 'app-bottomnav-routing-view1-sample',
    template: `This is content in component # 1`
})
export class RoutingView1Component {
}

@Component({
    selector: 'app-bottomnav-routing-view2-sample',
    template: `This is content in component # 2`
})
export class RoutingView2Component {
}

@Component({
    selector: 'app-bottomnav-routing-view3-sample',
    template: `This is content in component # 3`
})
export class RoutingView3Component {
}
