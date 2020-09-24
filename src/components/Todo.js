import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MomentUtils from '@date-io/moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './Todo.css';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Grid item xs={12} sm={6} md={3} mt={3} className="grid-item" >
                <Card className="card">
                    <CardContent>
                        <Typography>{this.props.description}</Typography>
                        <Typography>{this.props.name}</Typography>
                        <Typography>{this.props.status}</Typography>
                        <Typography>{new Date(this.props.dueDate).toLocaleDateString()}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
            
            
        
    }

}