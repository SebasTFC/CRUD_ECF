const controller ={};

controller.list = (req, res)=>{
    req.getConnection((err,conn) =>{
      conn.query('SELECT * FROM service',(err, services) => {
        if (err){
            res.json(err);
        }
        res.render('services', {
            data: services
        });
      });  
    });
};

controller.save = (req, res)=>{
    const data = req.body;
    req.getConnection((err,conn) =>{
      conn.query('INSERT INTO service SET ?',[data],(err, services) => {
        res.redirect('/');
      });  
    });
};

controller.delete = (req, res)=>{
    const {id} = req.params;
    req.getConnection((err,conn) =>{
      conn.query('DELETE FROM service WHERE id=?',[id],(err, rows) => {
        res.redirect('/');
      });  
    });
 
};

controller.edit = (req, res)=>{
    const {id} = req.params;
    req.getConnection((err,conn) =>{
      conn.query('SELECT * FROM service WHERE id = ?',[id],(err, service) => {
        res.render('service_edit',{
            data: service[0]
        });
      });  
    });
};

controller.update = (req, res)=>{
    const {id} = req.params;
    const newService = req.body;
    req.getConnection((err,conn) =>{
      conn.query('UPDATE service SET ? WHERE id = ?',[newService, id],(err, service) => {
        res.redirect('/'); 
      });  
    });
};




module.exports = controller;
