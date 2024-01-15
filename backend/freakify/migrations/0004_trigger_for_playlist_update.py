# Generated by Django 5.0.1 on 2024-01-05 12:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('freakify', '0003_add_defaults_for_dates'),
    ]

    operations = [
        migrations.RunSQL(
            """CREATE OR REPLACE FUNCTION update_playlist_edit_time_function() RETURNS trigger AS $$
                BEGIN
                  UPDATE playlist SET update_time=CURRENT_TIMESTAMP WHERE playlist_id = NEW.playlist_id;
                  RETURN NULL;
                END;
            $$ LANGUAGE plpgsql;
            """
        ),
        migrations.RunSQL(
    """CREATE OR REPLACE TRIGGER update_time_trigger AFTER INSERT on playlist_songs 
    FOR EACH STATEMENT
    EXECUTE FUNCTION update_playlist_edit_time_function();
    """
)
    ]