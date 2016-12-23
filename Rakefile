require 'scss_lint'
require 'uglifier'

drafts_dir = '_drafts'
posts_dir  = '_posts'
epub_dir = './content/epub'

desc 'default task'
task :default => [:spec] 

# rake post['my new post']
desc 'create a new post with "rake post[\'post title\']"'
task :post, :title do |t, args|
  if args.title
    title = args.title
  else
    puts "Please try again. Remember to include the filename."
  end
  mkdir_p "#{posts_dir}"
  filename = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.downcase.gsub(/[^\w]+/, '-')}.md"
  puts "Creating new post: #{filename}"
  File.open(filename, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    layout: post
    title: #{title}
    date: #{Time.new.strftime('%Y-%m-%d %H:%M')}
    categories:
    ---

    EOS
  end

# Uncomment the line below if you want the post to automatically open in your default text editor
#  system ("#{ENV['EDITOR']} #{filename}")
end

# usage: rake draft['my new draft']
desc 'create a new draft post with "rake draft[\'draft title\']"'
task :draft, :title do |t, args|
  if args.title
    title = args.title
  else
    puts "Please try again. Remember to include the filename."
  end
  mkdir_p "#{drafts_dir}"
  filename = "#{drafts_dir}/#{title.downcase.gsub(/[^\w]+/, '-')}.md"
  puts "Creating new draft: #{filename}"
  File.open(filename, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    layout: post
    title: #{title}
    date: #{Time.new.strftime('%Y-%m-%d %H:%M')}
    categories:
    ---

    EOS
  end

# Uncomment the line below if you want the draft to automatically open in your default text editor
# system ("#{ENV['EDITOR']} #{filename}")
end

desc 'preview the site with drafts'
task :preview do
  puts "## Generating site"
  puts "## Stop with ^C ( <CTRL>+C )"
  system "jekyll serve --watch --drafts"
end

desc 'list tasks'
task :list do
  puts "Tasks: #{(Rake::Task.tasks - [Rake::Task[:list]]).join(', ')}"
  puts "(type rake -T for more detail)\n\n"
end

desc 'lint css'
task :lint_scss do
  system 'sed -i.bak 1s:.*://---: ./css/style.scss'
  system 'sed -i.bak 2s:.*://---: ./css/style.scss'
  system 'scss-lint -c scss_lint.yml ./css/style.scss'
  system 'sed -i.bak 1s:.*:---: ./css/style.scss'
  system 'sed -i.bak 2s:.*:---: ./css/style.scss'
  system 'rm ./css/style.scss.bak'
end

desc 'minify js'
task :minify do
  system 'sed -i.bak 1s:.*://---: ./js/search.js'
  system 'sed -i.bak 2s:.*://---: ./js/search.js'
  File.open('./js/search.min.js', 'w') do |fo|
    fo.puts '---'
    fo.puts '---'
    fo.puts Uglifier.compile(File.read("js/search.js"))
  end
  system 'sed -i.bak 1s:.*:---: ./js/search.js'
  system 'sed -i.bak 2s:.*:---: ./js/search.js'
  system 'rm ./js/*.bak'
end